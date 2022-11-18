import { Experience } from "../typings";

export const fetchExperinces =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json()
    const experiences: Experience[] = data.experiences;

    return experiences;
};