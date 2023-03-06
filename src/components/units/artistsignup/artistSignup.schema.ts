import * as yup from "yup";

export const ArtistSignupYup = yup.object({
  active_name: yup.string().required("팀명을 입력해주세요"),
  category: yup.string().required("공연 주장르를 설정해 주세요"),
  description: yup.string().required("소개글을 적어주세요"),
  promotion_url: yup.string(),
});
