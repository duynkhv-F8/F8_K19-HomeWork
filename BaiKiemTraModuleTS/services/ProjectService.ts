import type { Project } from "../entities/Project.js";
import { EmployeeService } from "./EmployeeService.js";
import uuid from "../utils/uuid.js";

export class ProjectService {
    private projects: Project[] = [];

    constructor(private employeeService: EmployeeService) {}

    create(project: Omit<Project, "id">): Project {
        const newProject: Project = {
            id: uuid(),
            ...project,
        };

        this.projects.push(newProject);

        const employee = this.employeeService.findById(project.employeeId);

        if (employee) {
            employee.receiveNoti(
                "Bạn vừa được gán vào dự án mới."
            );
        }

        return newProject;
    }

    updateById(
        id: string,
        data: Partial<Omit<Project, "id">>
    ): Project | null {
        const project = this.projects.find(
            (project) => project.id === id
        );

        if (!project) {
            return null;
        }

        const employeeChanged =
            data.employeeId !== undefined &&
            data.employeeId !== project.employeeId;

        Object.assign(project, data);

        if (employeeChanged) {
            const employee = this.employeeService.findById(
                project.employeeId
            );

            if (employee) {
                employee.receiveNoti(
                    "Bạn đã được chuyển giao phụ trách dự án này."
                );
            }
        }

        return project;
    }
}