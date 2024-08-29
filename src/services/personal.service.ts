import { PersonalAdapter } from "@/adapters";
import { PersonalModel } from "@/models";
import { AppError, privateInstance } from "@/helpers";

const collection = "/clients";

export const getOne = async (params: { id: number }) => {
  const { id } = params;

  const response = await privateInstance.get(`${collection}/${id}`);
  if (!response || response instanceof AppError) return response as AppError;

  const adaptedResponse = PersonalAdapter.getOne.output(response.data);
  return adaptedResponse;
};

export const create = async (data: PersonalModel.CreateData) => {
  const adaptedInput = PersonalAdapter.create.input(data);

  const response = await privateInstance.post(collection, adaptedInput);
  if (!response || response instanceof AppError) return response as AppError;

  return true;
};
