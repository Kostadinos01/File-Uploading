import React, { useState } from "react";

export default function Form(initialVal = null) {
  const [file, setFile] = useState(initialVal);

  const onFileChange = (e) => {
    setFile({ file: e.target.files[0] });
  };

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append(file, file.name);

    console.log(file);
  };

  return (
    <div>
      <h1>File Upload using React!</h1>

      <input type="file" onChange={onFileChange} />

      <button onClick={onFileUpload}>Upload!</button>
    </div>
  );
}
