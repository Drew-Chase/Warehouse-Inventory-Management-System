using System.Diagnostics.CodeAnalysis;
using System.Text;
using Warehouse.Data.Constants;

namespace Warehouse.Data.Controllers;

public static class FileSystemController
{
    /// <summary>
    /// Saves a file to the application data directory.
    /// </summary>
    /// <param name="filename">The name of the file.</param>
    /// <param name="stream">The file stream to save.</param>
    /// <param name="id">The generated GUID ID for the file.</param>
    /// <returns><c>true</c> if the file was successfully saved; otherwise, <c>false</c>.</returns>
    public static bool SaveFile(string filename, Stream stream, out Guid id) => SaveFile(filename, stream, out id, out _);

    /// <summary>
    /// Saves a file to the file system.
    /// </summary>
    /// <param name="filename">The name of the file to be saved.</param>
    /// <param name="stream">The stream containing the file data.</param>
    /// <param name="id">[out] The unique identifier assigned to the saved file.</param>
    /// <param name="exception">[out] The exception that occurred during the save operation, if any.</param>
    /// <returns><c>true</c> if the file was successfully saved; otherwise, <c>false</c>.</returns>
    public static bool SaveFile(string filename, Stream stream, out Guid id, [NotNullWhen(false)] out Exception? exception)
    {
        try
        {
            id = Guid.NewGuid();
            string idString = id.ToString("N");
            // Create file with id as filename
            // This is to prevent searching for files based on keywords or the filename.
            // This will make it harder for an attacker to find a specific file.
            string path = Path.Combine(Directory.CreateDirectory(Path.Combine(Directories.ApplicationData, idString[..2])).FullName, idString);

            // Write filename length and filename
            byte[] filenameBytes = Encoding.UTF8.GetBytes(filename);
            if (filenameBytes.Length > ushort.MaxValue) throw new Exception("Filename is too long.");
            byte[] filenameLengthBytes = BitConverter.GetBytes((ushort)filenameBytes.Length);

            // Write filename length and filename to file
            using (FileStream fileStream = File.Create(path))
            {
                fileStream.Write(filenameLengthBytes);
                fileStream.Write(filenameBytes);
                stream.CopyTo(fileStream);
            }

            exception = null;
            return true;
        }
        catch (Exception e)
        {
            id = Guid.Empty;
            exception = e;
            return false;
        }
    }

    /// <summary>
    /// Retrieves a file from the file system based on its ID.
    /// </summary>
    /// <param name="id">The ID of the file to retrieve.</param>
    /// <param name="filename">An output parameter that receives the filename of the retrieved file.</param>
    /// <param name="stream">An output parameter that receives the stream containing the contents of the retrieved file.</param>
    /// <returns><c>true</c> if the file was successfully retrieved; otherwise, <c>false</c>.</returns>
    public static bool GetFile(Guid id, [NotNullWhen(true)] out string? filename, [NotNullWhen(true)] out Stream? stream) => GetFile(id, out filename, out stream, out _);

    /// <summary>
    /// Retrieves a file from the file system based on the given file ID.
    /// </summary>
    /// <param name="id">The unique identifier of the file.</param>
    /// <param name="filename">When this method returns, contains the name of the retrieved file, or null if the file was not found.</param>
    /// <param name="stream">When this method returns, contains a Stream representing the retrieved file content, or null if the file was not found.</param>
    /// <param name="exception">When this method returns false, contains any exception that occurred during the file retrieval process, or null if there was no exception.</param>
    /// <returns>true if the file was successfully retrieved; otherwise, false.</returns>
    public static bool GetFile(Guid id, [NotNullWhen(true)] out string? filename, [NotNullWhen(true)] out Stream? stream, [NotNullWhen(false)] out Exception? exception)
    {
        try
        {
            string idString = id.ToString("N");
            string path = Path.Combine(Directories.ApplicationData, idString[..2], idString);
            using FileStream fileStream = File.OpenRead(path);
            // Read filename length and filename
            byte[] filenameLengthBytes = new byte[sizeof(ushort)];
            if (filenameLengthBytes.Length == 0) // Check if filename length is empty
            {
                throw new Exception("Filename length is empty.");
            }

            _ = fileStream.Read(filenameLengthBytes);
            ushort filenameLength = BitConverter.ToUInt16(filenameLengthBytes);
            byte[] filenameBytes = new byte[filenameLength];
            if (filenameBytes.Length == 0) // Check if filename is empty
            {
                throw new Exception("Filename is empty.");
            }

            _ = fileStream.Read(filenameBytes);
            filename = Encoding.UTF8.GetString(filenameBytes);
            stream = new MemoryStream();
            fileStream.CopyTo(stream);
            stream.Position = 0;
            exception = null;
            return true;
        }
        catch (Exception e)
        {
            filename = null;
            stream = null;
            exception = e;
            return false;
        }
    }
}