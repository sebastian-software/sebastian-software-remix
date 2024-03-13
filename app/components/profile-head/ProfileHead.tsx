import { rootClass, nameClass } from "./ProfileHead.css";

export interface ProfileHeadProps {
  name: string;
}

export function ProfileHead({ name }: ProfileHeadProps) {
  return (
    <div className={rootClass}>
      <h1 className={nameClass}>{name}</h1>
    </div>
  );
}
