import cloudinary from "./cloudinary";

export const uplodeImage = async (file: File, folder: string) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);
  return new Promise(async (resolve, rejects) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        async (error, result) => {
          if (error) {
            rejects(error.message);
          }
          resolve(result);
        }
      )
      .end(bytes);
  });
};
