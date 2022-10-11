export async function getCep(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const { data }: any = await fetch(url);

  return data;
}
