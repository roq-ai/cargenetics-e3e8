import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  pickup_location: yup.string().required(),
  dropoff_location: yup.string().required(),
  user_id: yup.string().nullable(),
  vehicle_id: yup.string().nullable(),
});
