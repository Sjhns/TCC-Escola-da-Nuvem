function uploadPDF() {
    // const fileInput = document.getElementById('pdf-input');
    const fileInput = document.getElementById('file_input');
    const file = fileInput.files[0];
    
  
    const formData = new FormData();
    formData.append('file', file);
    

    fetch('https://tcc-aws-02.up.railway.app/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao enviar PDF');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  