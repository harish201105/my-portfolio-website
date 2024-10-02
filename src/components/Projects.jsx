import ProjectItem from "./ProjectItem";
import { project_list } from "../assets/assets";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center md:flex-wrap gap-5 py-28 lg:py-48 px-8 lg:px-36">
      <div className="mb-8">
        <h1 className="font-normal text-4xl text-center text-white mb-4">
          My Recent
          <span className="font-semibold" style={{ color: "#C770F0" }}>
            {" "}
            Works
          </span>
        </h1>
        <p className="text-sm sm:text-lg text-white">
          Here are a few deployed frontend projects I've worked on recently. Checkout my Github for more!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-center">
        {project_list.map((item, index) => {
          return (
            <ProjectItem
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              ghlink={item.ghlink}
              demolink={item.demolink}
            />
          );
        })}
      </div>
    </section>
  );
}
