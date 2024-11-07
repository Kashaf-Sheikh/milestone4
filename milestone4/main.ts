// get references to the form and display area
const formdiv = document.getElementById('resume-form') as HTMLFormElement;
const resumeDivElement = document.getElementById('resume-display') as HTMLDivElement;
// Handle form submission
formdiv.addEventListener('submit' ,(event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values 
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    
    // Generate the resume content dynamically
  const resumehtml = `
  <h2><b>Editable Resume</b></h2>
  <h3>Personal Information</h3>
  <p><b>name:</b><span contenteditable="true"> ${name}</span> </p> 
  <p><b>email:</b><span contenteditable="true">${email}</span></p>
  <p><b>phone:</b><span contenteditable="true">${phone}</span></p>

  <h3>Education</h3>
  <p contenteditable="true">${education}</p>

  <h3>Experience</h3>
  <p contenteditable="true">${experience}</p>

  <h3>Skills</h3>
  <p contenteditable="true">${skills}</p>
  
  `

  //display the generate resume 
  if(document.getElementById('resume-display') as HTMLDivElement){
      (document.getElementById('resume-display') as HTMLDivElement).innerHTML = resumehtml;
  }else {
      console.error('Script Loaded');
 
  }
})