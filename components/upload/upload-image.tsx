"use client";

import { useDropzone } from "react-dropzone";
import { uploadImage } from "@/server/upload-image";
import { Card, CardContent } from "../ui/card";

export default function UploadImage() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/jpg": [".jpg"],
      "image/webp": [".webp"],
    },
    onDrop: async (acceptedFiles, fileRejections) => {
      if (acceptedFiles.length) {
        const formData = new FormData();
        formData.append("image", acceptedFiles[0]);
        const objectUrl = URL.createObjectURL(acceptedFiles[0]);

        const result = await uploadImage({ image: formData });
        console.log(result)
      }
    },
  });
  return (
    <Card {...getRootProps()}>
      <CardContent>
        <input {...getInputProps()} type="text" />
        <div>
          <h1>Cool animation</h1>
          <p>
            {isDragActive
              ? "Drop your image here..."
              : "Start by uploading an image"}
          </p>
          <p>Supported Formats .jpeg .jpg .png .webp</p>
        </div>
      </CardContent>
    </Card>
  );
}
