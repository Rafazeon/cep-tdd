import axios from "axios";

export async function getCep(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const { data } = await axios.get(url);

  return data;
}
