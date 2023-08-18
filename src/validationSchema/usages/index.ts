import * as yup from 'yup';

export const usageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  miles_driven: yup.number().integer().required(),
  hours_used: yup.number().integer().required(),
  vehicle_id: yup.string().nullable(),
});
