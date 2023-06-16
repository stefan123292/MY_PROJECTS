import { useState } from "react";
function Projects() {
    const [project, setProject] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [showCompleted, setShowCompleted] = useState(false);

    const currentDate = new Date();
    const maxDate = currentDate.toISOString().split("T")[0];
    const addProject = () => {
        const ad = {
            title,
            description,
            date,
            completed: false,
        };

        setProject([...project, ad]);
        setTitle("");
        setDescription("");
        setDate("");
    };
    const deleteProject = (index) => {
        const updatedList = [...project];
        updatedList.splice(index, 1);
        setProject(updatedList);
    };
    const handle = (index) => {
        const updatedd = [...project];
        updatedd[index].completed = !updatedd[index].completed;
        setProject(updatedd);
    };
    const filteredProjects = showCompleted
        ? project.filter((project) => project.completed)
        : project;

    return (
        <div className="Project">
            <h1>Projects List</h1>
            <div className="Inputs">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Data"
                    max={maxDate}
                />
                <button onClick={addProject}>Add</button>
            </div>
            <h2>Project List</h2>
            <label>
                Show Completed Projects
                <input
                    type="checkbox"
                    checked={showCompleted}
                    onChange={() => setShowCompleted(!showCompleted)}
                />
            </label>
            <div className="Projects">
                <div>
                    {filteredProjects.map((element, index) => (
                        <li key={index} className="project-item">
                            <input
                                type="checkbox"
                                checked={project.completed}
                                onChange={() => handle(index)}
                            />
                            <span>
                                <b>Title:</b> {element.title + " "}
                                <b>Description:</b>
                                {element.description + " "}
                                <b>Date:</b>
                                {element.date}
                            </span>
                            <button onClick={() => deleteProject(index)}>Delete</button>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Projects;
