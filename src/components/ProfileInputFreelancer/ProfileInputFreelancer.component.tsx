//libraries
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import { addFreelancer } from "../../firebase/addFreelancer";
import { auth } from "../../firebase/firebase.config";
import { PrimaryButton, PrimaryNavyButton } from "../UI/Buttons/Buttons.styled";
import {
  AboutMeStyled,
  CategoryPair,
  ProfileInputFreelancerStyled,
  CategoryGroup,
} from "./ProfileInputFreelancer.styled";
import { InputForm, InputTextArea } from "../UI/Input/Input.styled";

//types

export interface IJob {
  id: string;
  author: string;
  content: string;
  date: string;
  status: string;
  email: string;
}

export interface IJobs {
  jobs: IJob[] | [];
}
export interface IProfileInputFreelancer {
  uid: string;
  firstName: string;
  secondName: string;
  email: string;
  country: string;
  city: string;
  experience: number;
  aboutMe: string;
  branding: string;
  print: string;
  digital: string;
  ux: string;
  ilustrations: string;
  other: string;
  tags: string;
  jobs: IJobs | [];
}

export const ProfileInputFreelancer = () => {
  const { control, handleSubmit } = useForm<IProfileInputFreelancer>();
  const [success, setSuccess] = useState(false);

  //START - category
  //Branding
  const [isBrandingChecked, setIsBrandingChecked] = useState(false);

  function handleChangeBranding(event: React.ChangeEvent<HTMLInputElement>) {
    setIsBrandingChecked(event.target.checked);
  }

  //Printing - category
  const [isPrintChecked, setIsPrintChecked] = useState(false);

  function handleChangePrint(event: React.ChangeEvent<HTMLInputElement>) {
    setIsPrintChecked(event.target.checked);
  }
  //Digital - category
  const [isDigitalChecked, setIsDigitalChecked] = useState(false);

  function handleChangeDigital(event: React.ChangeEvent<HTMLInputElement>) {
    setIsDigitalChecked(event.target.checked);
  }
  //UX - category
  const [isUxChecked, setIsUxChecked] = useState(false);

  function handleChangeUx(event: React.ChangeEvent<HTMLInputElement>) {
    setIsUxChecked(event.target.checked);
  }
  //Ilustrations - category
  const [isIlustrationChecked, setIsIlustrationChecked] = useState(false);

  function handleChangeIlustration(event: React.ChangeEvent<HTMLInputElement>) {
    setIsIlustrationChecked(event.target.checked);
  }
  //Other - category
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  function handleChangeOther(event: React.ChangeEvent<HTMLInputElement>) {
    setIsOtherChecked(event.target.checked);
  }
  // END - category

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/search");
    }
  }, [success]);

  const { loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  const onSubmit = handleSubmit((data: IProfileInputFreelancer) => {
    data.branding = data.branding ?? null;
    data.print = data.print ?? null;
    data.digital = data.digital ?? null;
    data.ux = data.ux ?? null;
    data.ilustrations = data.ilustrations ?? null;
    data.other = data.other ?? null;

    auth.currentUser != null ? (data.uid = String(auth.currentUser.uid)) : "error";
    auth.currentUser != null ? (data.jobs = []) : "error";
    addFreelancer(data)
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error adding freelancer: ", error);
      });
  });

  return (
    <>
      <ProfileInputFreelancerStyled onSubmit={onSubmit}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <InputForm placeholder="Imię" type={"text"} {...field} />}
        />
        <Controller
          name="secondName"
          control={control}
          render={({ field }) => <InputForm placeholder="Nazwisko" type={"text"} {...field} />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <InputForm placeholder="Email" type={"email"} {...field} />}
        />
        <Controller
          name="country"
          control={control}
          render={({ field }) => <InputForm placeholder="Kraj" type={"text"} {...field} />}
        />
        <Controller
          name="city"
          control={control}
          render={({ field }) => <InputForm placeholder="Miasto" type={"text"} {...field} />}
        />
        <Controller
          name="experience"
          control={control}
          render={({ field }) => <InputForm placeholder="Doświadczenie" type={"number"} {...field} />}
        />
        <Controller
          name="aboutMe"
          control={control}
          render={({ field }) => <InputTextArea placeholder="O mnie..." type={"text"} {...field} />}
        />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => <InputTextArea placeholder="Tagi..." type={"text"} {...field} />}
        />
        <h2>Usługi</h2>
        <CategoryGroup>
          <Controller
            name="branding"
            control={control}
            render={({ field }) => (
              <CategoryPair>
                <input
                  placeholder="Branding"
                  type={"checkbox"}
                  checked={isBrandingChecked}
                  {...field}
                  onChange={(e) => {
                    handleChangeBranding(e);
                    field.onChange(e);
                  }}
                />
                <label htmlFor="branding">Branding</label>
              </CategoryPair>
            )}
          />
          <Controller
            name="print"
            control={control}
            render={({ field }) => (
              <CategoryPair>
                <input
                  placeholder="Printing"
                  type={"checkbox"}
                  checked={isPrintChecked}
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    handleChangePrint(e);
                    field.onChange(e);
                  }}
                />
                <label htmlFor="print">Druk</label>
              </CategoryPair>
            )}
          />
          {/* //START */}
          <Controller
            name="digital"
            control={control}
            render={({ field }) => (
              <CategoryPair>
                <input
                  placeholder="Digital"
                  type={"checkbox"}
                  checked={isDigitalChecked}
                  {...field}
                  onChange={(e) => {
                    handleChangeDigital(e);
                    field.onChange(e);
                  }}
                />
                <label htmlFor="digital">Digital</label>
              </CategoryPair>
            )}
          />
          <Controller
            name="ux"
            control={control}
            render={({ field }) => (
              <CategoryPair>
                <input
                  placeholder="Ux"
                  type={"checkbox"}
                  checked={isUxChecked}
                  {...field}
                  onChange={(e) => {
                    handleChangeUx(e);
                    field.onChange(e);
                  }}
                />
                <label htmlFor="ux">UX/UI</label>
              </CategoryPair>
            )}
          />
          <Controller
            name="ilustrations"
            control={control}
            render={({ field }) => (
              <CategoryPair>
                <input
                  placeholder="Ilustrations"
                  type={"checkbox"}
                  checked={isIlustrationChecked}
                  {...field}
                  onChange={(e) => {
                    handleChangeIlustration(e);
                    field.onChange(e);
                  }}
                />
                <label htmlFor="ilustration">Ilustracje</label>
              </CategoryPair>
            )}
          />
          <Controller
            name="other"
            control={control}
            render={({ field }) => (
              <CategoryPair>
                <input
                  placeholder="Other"
                  type={"checkbox"}
                  checked={isOtherChecked}
                  {...field}
                  onChange={(e) => {
                    handleChangeOther(e);
                    field.onChange(e);
                  }}
                />
                <label htmlFor="other">Inne</label>
              </CategoryPair>
            )}
          />
        </CategoryGroup>
        <PrimaryNavyButton type="submit">Wyślij</PrimaryNavyButton>
      </ProfileInputFreelancerStyled>
    </>
  );
};
