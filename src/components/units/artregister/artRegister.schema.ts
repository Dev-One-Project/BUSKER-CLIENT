import * as yup from "yup";

export const ArtRegisterYup = yup.object({
  contents: yup.string().required("공연 내용을 입력해 주세요."),
  category: yup.string().required("공연장르를 입력해 주세요"),
  start_time: yup
    .string()
    .min(2, "시작시간을 설정해주세요")
    .required("시작시간을 설정해주세요"),
  end_time: yup.string().required("종료시간을 설정해주세요"),
});
