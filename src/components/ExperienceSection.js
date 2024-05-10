import React from 'react';
import './ExperienceSection.css'; // Import CSS file for styling

const ExperienceSection = () => {
  return (
    <div id="experience-sections" className="experience-section px-4 lg:px-0 mx-auto max-w-5xl">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Experience</h1>
      {/* Nagarro Software Private Limited */}
      <div className="experience mb-8 lg:flex lg:space-x-8">
        <div className="flex-none lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:pr-8">
          <h3 className="company-name text-lg lg:text-xl xl:text-2xl font-semibold">Nagarro Software Private Limited</h3>
          <p className="location text-gray-600">Gurgaon, CA</p>
          <p className="position">Associate Software Engineer, Full-Time</p>
          <p className="duration">August 2021 - August 2022</p>
        </div>
        <div className="flex-1">
          <ul className="list-disc pl-4">
            <li>Optimized ServiceNow modules including Service Portal, Client Script, and Order Guide, elevating system functionalities and improving user experience by 25%.</li>
            <li> Engaged in the design and implementation of record producers, catalog items, variables, and UI Policies, allocating 70% effort. Additionally, focus on thorough documentation and testing processes.
</li>
            <li> Delivered a project utilizing Node.js and AngularJS, showcasing expertise in full-stack development. Managed a team of 5 developers to deliver the project within a tight deadline, resulting in a 20% increase in efficiency compared to previous projects.</li>
          </ul>
        </div>
      </div>

      {/* Trinabh Infotech Private Limited */}
      <div className="experience mb-8 lg:flex lg:space-x-8">
        <div className="flex-none lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:pr-8">
          <h3 className="company-name text-lg lg:text-xl xl:text-2xl font-semibold">Trinabh Infotech Private Limited</h3>
          <p className="location text-gray-600">Indore, India</p>
          <p className="position">Android Software Trainee, Intern</p>
          <p className="duration">January 2021 – March 2021</p>
        </div>
        <div className="flex-1">
          <ul className="list-disc pl-4">
            {/* <li>EUC Remediation Framework:</li>
            <ul className="list-disc pl-4">
              <li>Directed creation and launch of CITIBANK's audit processing applications, utilizing JAVA, Aspose, Rest API, and Appian, achieving a 95% user satisfaction score</li>
              <li>Pioneered the enhancement of web portal's backend using Java, Spring Boot, React, Docker, and MicroServices, boosting container creation efficiency by 30% and slashing application deployment time by 25%</li>
              <li>Architected a high-capacity API Invoking Service, amplifying system scalability by 20% via Microservices and Google Cloud API integration</li>
              <li>Orchestrated JAVA, SpringBoot, Rest API, SQL, Jenkins, and GCP VMs to enhance Google Cloud API connectivity</li>
              <li>Accomplished a 40% acceleration in API response times by innovating microservices deployment and refining API invocation processes</li>
            </ul>
            <li>Container Accelerator:</li> */}
            <ul className="list-disc pl-4">
              <li>Trained on Android Studio, gaining expertise in mobile app development with a 50% increase in proficiency.</li>
              <li> Applied acquired skills to design and implement a comprehensive Expense Tracker Management system project, 
                    resulting in a 60% improvement in project efficiency.</li>  
            </ul>
          </ul>
        </div>
      </div>

      {/* Webtek Labs Private Limited */}
      <div className="experience mb-8 lg:flex lg:space-x-8">
        <div className="flex-none lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:pr-8">
          <h3 className="company-name text-lg lg:text-xl xl:text-2xl font-semibold">Webtek Labs Private Limited</h3>
          <p className="location text-gray-600">Indore, India</p>
          <p className="position">Industrial Trainee, Intern</p>
          <p className="duration">September 2020 – October 2020</p>
        </div>
        <div className="flex-1">
          <ul className="list-disc pl-4">
            <li> Acquired expertise in Data Science, Python libraries (Pandas, Matplotlib), and PyCharm IDE, demonstrating a 60% proficiency in Python programming and data analysis.</li>
            <li>Performed Data Analysis on a Huge Dataset and visualized project using different libraries, resulting in a 75% improvement in data accuracy and a 50% enhancement in visualization quality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
