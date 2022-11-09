import * as yup from "yup";

export const ArtRegisterYup = yup.object({
  contents: yup.string().required("공연 내용을 입력해 주세요."),
  genre: yup.string().required("공연장르를 입력해 주세요"),
  address: yup.string().required("공연장소는 필수입니다"),
  start_time: yup
    .string()
    .min(2, "시작시간을 설정해주세요")
    .required("시작시간을 설정해주세요"),
  end_time: yup.string().required("종료시간을 설정해주세요"),
  day: yup.string().required("날짜를 입력해주세요"),
});
