import { PersonalModel } from "@/models";
import { InputAdapter, OutputAdapter } from "@/helpers";

export const getOne: {
  output: OutputAdapter<any, PersonalModel.RemainingData>;
} = {
  output: (response) => {
    const convertedResource: PersonalModel.RemainingData = {
      lastName: response.lastName,
      email: response.email,
      role: response.role,
      phone: response.phone,
    };

    return convertedResource;
  },
};

export const create: {
  input: InputAdapter<PersonalModel.CreateData, PersonalModel.CreateBody>;
} = {
  input: (data) => {
    const convertedResource: PersonalModel.CreateBody = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      role: data.role,
      password: data.password,
    };

    return convertedResource;
  },
};
