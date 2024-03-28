import { ReactNode } from "react";
import Facebook from "src/assets/icons/SocialMediaLogo/Facebook";
import Google from "src/assets/icons/SocialMediaLogo/Google";

export interface SocialMediaServiceType {
    name:string;
    href:string;
    Icon:({ type }: { type?: "" | "primary" | undefined; }) => JSX.Element
}
export const SocialMediaService: SocialMediaServiceType[] = [
    { name:"Google", href:"/google", Icon:Google},
    { name:"Facebook", href:"/facebook", Icon:Facebook}
]