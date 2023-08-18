import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  average_speed: yup.number().integer().required(),
  fuel_efficiency: yup.number().integer().required(),
  vehicle_id: yup.string().nullable(),
});
