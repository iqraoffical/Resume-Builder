// Get form and display area refrences
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const display = document.getElementById("resume-display") as HTMLDivElement;
  // Handle form submission
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); //prevent page reload

    // Collecting data from form fields
    const name = (document.getElementById("Name:") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const website = (document.getElementById("website") as HTMLInputElement)
      .value;
    const education = [
      (document.getElementById("education1") as HTMLInputElement).value,
      (document.getElementById("education2") as HTMLInputElement).value,
      (document.getElementById("education3") as HTMLInputElement).value,
      (document.getElementById("education4") as HTMLInputElement).value,
    ];
    const experience = [
      (document.getElementById("experience1") as HTMLInputElement).value,
      (document.getElementById("experience2") as HTMLInputElement).value,
      (document.getElementById("experience3") as HTMLInputElement).value,
      (document.getElementById("experience4") as HTMLInputElement).value,
    ];
    const skills = [
      (document.getElementById("skill1") as HTMLInputElement).value,
      (document.getElementById("skill2") as HTMLInputElement).value,
      (document.getElementById("skill3") as HTMLInputElement).value,
      (document.getElementById("skill4") as HTMLInputElement).value,
    ];

    // Create editable resume
    display.innerHTML = `
      <h2><b>Resume<b></h2>
      <h3>Personal Information</h3>
      <p><strong>Name:<b><span id="display-name"  contenteditable="true"></strong> ${name}<span/></p>
      <p><strong>Email:<b><span id="display-email" contenteditable="true"></strong> ${email}<span/></p>
      <p><strong>Phone:<b><span id="display-phone" contenteditable="true"></strong> ${phone}<span/></p>
      <p><strong>Website:<b><span id="display-website" contenteditable="true"></strong> ${website}<span/></p>
      <h3>Education</h3>
      <ul>
        ${education
          .filter((item) => item)
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>Work Experience</h3>
      <ul>
        ${experience
          .filter((item) => item)
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>

      <h3>Skills</h3>
      <ul>
        ${skills
          .filter((item) => item)
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>
    `;
// update  display content when input field are edited
const updateField=(fieldId:string,displayId:string)=>{
  const displayField=document.getElementById(displayId) as HTMLSpanElement;
  displayField.addEventListener("input",()=>{
    (document.getElementById(fieldId) as HTMLInputElement).value=display.innerText;
  })
}
// Use listeners to update input fields
updateField("name","display-name");
updateField("email","display-email");
updateField("phone","display-phone");
updateField("website","display-website");


    // resume display and content editable area
    display.setAttribute("contenteditable","true");

    // Added focus on the display area for immediate editing
    display.focus();
    


  });

 



});



