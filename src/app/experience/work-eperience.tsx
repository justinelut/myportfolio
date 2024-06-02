interface ExperienceProps {
  company:string;
  year: string;
  title: string;
  description: () => JSX.Element;
}

const workExperience: ExperienceProps[] = [
  {
    company: "Ray Barber shop",
    year: "Feb 2022 - May 2023",
    title: "Barber",
    description: () => (
      <ul>
        <li>Provided exceptional customer service to a diverse clientele.</li>
        <li>Maintained a clean and organized workspace.</li>
        <li>Kept up-to-date with the latest grooming trends and techniques.</li>
      </ul>
    ),
  },
  {
    company: "Lanet Computer School",
    year: "July 2023 - Feb 2024",
    title: "Computer Administrator",
    description: () => (
      <ul>
        <li>Managed and maintained computer systems and networks.</li>
        <li>Provided technical support and training to staff and students.</li>
        <li>Implemented security measures to protect data and systems.</li>
      </ul>
    ),
  },
  {
    company: "Olestones Builders",
    year: "March 2024 - Apr 2024",
    title: "Frontend Developer",
    description: () => (
      <ul>
        <li>Developed and maintained the company's website using React, Next.js, and Tailwind CSS.</li>
        <li>Integrated backend services such as Supabase and Pocketbase.</li>
        <li>Implemented payment solutions using Paystack and Stripe.</li>
      </ul>
    ),
  },
];

export const WorkExperience = () => {
  return (
    <div className="px-4 pb-16 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div className="gap-6 row-gap-10">
        <div className="lg:py-6 lg:pr-16">
          {workExperience.map((experience, index) => (
            <div key={index} className="flex mb-8">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-slate-300"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg text-white font-extrabold">{experience.title}</p>
                <p className="mb-2 text-lg text-white font-extrabold">{experience?. experience.year}</p>
                <div className="text-gray-200">{experience.description()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
