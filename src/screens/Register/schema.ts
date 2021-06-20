import * as Yup from "yup";


export const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório."),
  amount: Yup.number()
    .required("Nome é obrigatório.")
    .typeError("Informe um valor númerico.")
    .positive("O valor não pode ser negativo."),
});
