//import libraries
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
//import styles
import { ChoiceRadio, ChoiceRadioGroup, ProfileInput } from "../components/ProfileInput/ProfileInput.styled";

//firebase config files
import { ProfileInputClient } from "../components/ProfileInputClient/ProfileInputClient.component";
import { ProfileInputFreelancer } from "../components/ProfileInputFreelancer/ProfileInputFreelancer.component";

//types and interfaces
interface IProfileForm {
  client: string;
  freelancer: string;
}

const ProfileForm = () => {
  const { control } = useForm<IProfileForm>();
  const [role, setRole] = useState<string>("");

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <>
      <h1>Profile Form!</h1>
      <ProfileInput>
        <ChoiceRadioGroup>
          <Controller
            name="client"
            control={control}
            render={() => (
              <ChoiceRadio>
                <input name={"role"} type={"radio"} value={"client"} onChange={radioHandler} />{" "}
                <label htmlFor="Freelancer">Client</label>
              </ChoiceRadio>
            )}
          />
          <Controller
            name="freelancer"
            control={control}
            render={() => (
              <ChoiceRadio>
                <input name={"role"} type={"radio"} value={"freelancer"} onChange={radioHandler} />{" "}
                <label htmlFor="Freelancer">Freelancer</label>
              </ChoiceRadio>
            )}
          />
        </ChoiceRadioGroup>
      </ProfileInput>
      {role === "client" && <ProfileInputClient />}
      {role === "freelancer" && <ProfileInputFreelancer />}
    </>
  );
};

export default ProfileForm;