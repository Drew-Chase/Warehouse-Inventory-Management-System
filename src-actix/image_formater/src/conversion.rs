use rsmpeg::avcodec::AVCodec;
use rsmpeg::avformat::{AVFormatContextInput, AVFormatContextOutput};
use std::ffi::CString;

pub fn convert_to_jpg(input: &str, output: &str) -> Result<(), String> {
	let input = CString::new(input).map_err(|e| e.to_string())?;
	let output = CString::new(output).map_err(|e| e.to_string())?;
	let input = AVFormatContextInput::open(&input, None, &mut None).map_err(|e| e.to_string())?;
	let streams = input.streams();
	let video_stream = streams.iter().find(|stream| stream.codecpar().codec_type == rsmpeg::ffi::AVMEDIA_TYPE_VIDEO).ok_or("No video stream found")?;
	let to_encoder = AVCodec::find_encoder_by_name(CString::new("mjpeg").unwrap().as_c_str()).ok_or("Failed to find encoder")?;
	let output_ctx = AVFormatContextOutput::create(output.as_c_str(), None).map_err(|e| e.to_string())?;


	Ok(())
}