use rsmpeg::avformat::AVFormatContextInput;
use std::ffi::CString;

pub fn get_image_dimensions(path: &str) -> Result<(u32, u32), String> {
	let file_path = CString::new(path).map_err(|e| e.to_string())?;

	let input = AVFormatContextInput::open(&file_path, None, &mut None).map_err(|e| e.to_string())?;
	let streams = input.streams();
	let codec = match streams.iter().find(|stream| stream.codecpar().codec_type == rsmpeg::ffi::AVMEDIA_TYPE_VIDEO) {
		Some(stream) => stream,
		None => return Err("No video stream found".to_string())
	};
	let codec_ctx = codec.codecpar();
	let width = codec_ctx.width as u32;
	let height = codec_ctx.height as u32;

	Ok((width, height))
}
