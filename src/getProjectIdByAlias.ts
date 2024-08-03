import { readFileSync } from "fs";

export function getProjectIdByAlias(alias: string): string {
    try {
        const firebaserc = JSON.parse(readFileSync(".firebaserc", { encoding: 'utf-8' }));
        return firebaserc.projects[alias];
    } catch (e) {
        return undefined;
    }
}

export function getTargetIdsByAlias(projectId:string,alias: string): string[] | undefined {
    try {
        const firebaserc = JSON.parse(readFileSync(".firebaserc", { encoding: 'utf-8' }));
        return firebaserc.targets[projectId].hosting[alias];
    } catch (e) {
        return undefined;
    }
}
