import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectItem = ({ image, name, description, ghlink, demolink }) => {
  return (
    <div className="w-full flex flex-col items-center text-white gap-4 px-3 py-12 rounded my-3 shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)] bg-transparent opacity-90 transition-transform duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_4px_4px_5px_rgba(129,72,144,0.561)]">
      <img src={image} alt="" className="px-8" />
      <p className="text-xl sm:text-2xl font-normal">{name}</p>
      <p className="text-center text-[16px] mx-6">{description}</p>
      <div className="flex gap-4">
        <a
          href={ghlink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 rounded px-4 py-2 text-xl bg-purple-500"
        >
          <span>
            <BsGithub className="mt-1" />
          </span>
          <button>{"GitHub"}</button>
        </a>
        <a
          href={demolink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 rounded px-4 py-2 text-xl bg-purple-500"
        >
          <span>
            <CgWebsite className="mt-1" />
          </span>
          <button>{"Demo"}</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
