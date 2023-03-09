export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IArtist = {
  __typename?: 'Artist';
  active_name: Scalars['String'];
  artistImageURL: Scalars['String'];
  category: ICategory;
  description: Scalars['String'];
  id: Scalars['String'];
  pick_user: Array<ILikeArtist>;
  promotion_url?: Maybe<Scalars['String']>;
};

export type IBoardAddress = {
  __typename?: 'BoardAddress';
  address: Scalars['String'];
  address_city: Scalars['String'];
  address_district: Scalars['String'];
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IBoardAddressInput = {
  address: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IBoardImages = {
  __typename?: 'BoardImages';
  boards: IBoards;
  id: Scalars['String'];
  url: Scalars['String'];
};

export type IBoards = {
  __typename?: 'Boards';
  artist: IArtist;
  boardAddress: IBoardAddress;
  boardImageURL: Array<IBoardImages>;
  category?: Maybe<ICategory>;
  comments: Array<IComments>;
  contents: Scalars['String'];
  createAt: Scalars['DateTime'];
  end_time?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isShowTime?: Maybe<Scalars['Boolean']>;
  start_time?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ICity = {
  __typename?: 'City';
  district: Array<IDistrict>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IComments = {
  __typename?: 'Comments';
  board: IBoards;
  content: Scalars['String'];
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: IUser;
};

export type ICreateArtistInput = {
  active_name: Scalars['String'];
  artistImageURL?: InputMaybe<Scalars['String']>;
  category: Scalars['String'];
  description: Scalars['String'];
  promotion_url?: InputMaybe<Scalars['String']>;
};

export type ICreateBoardInput = {
  boardAddressInput: IBoardAddressInput;
  boardImageURL?: InputMaybe<Array<Scalars['String']>>;
  categoryId: Scalars['String'];
  contents: Scalars['String'];
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
};

export type ICreateCommentInput = {
  boardId: Scalars['String'];
  content: Scalars['String'];
};

export type ICreateMemberInput = {
  memberImageURL?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  role: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  userImageURL?: InputMaybe<Scalars['String']>;
};

export type IDistrict = {
  __typename?: 'District';
  city: ICity;
  district: Scalars['String'];
  id: Scalars['String'];
};

export type IFetchDistricts = {
  __typename?: 'FetchDistricts';
  district: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type ILikeArtist = {
  __typename?: 'LikeArtist';
  artist: IArtist;
  id: Scalars['String'];
  user: IUser;
};

export type IMember = {
  __typename?: 'Member';
  artist?: Maybe<IArtist>;
  id: Scalars['String'];
  memberImageURL: Scalars['String'];
  name: Scalars['String'];
  role: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  SendVerificationEmail: Scalars['String'];
  artistLikeToggle: Scalars['Boolean'];
  confirmVerificationEmail: Scalars['Boolean'];
  createArtist: IArtist;
  createBoards: IBoards;
  createCategory: ICategory;
  createCity: Scalars['String'];
  createComment: IComments;
  createDistrictList: Scalars['String'];
  createMember: IMember;
  createUser: IUser;
  deleteArtist: Scalars['Boolean'];
  deleteArtistLike: Scalars['Boolean'];
  deleteBoard: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteMember: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['Boolean'];
  nonLoginConfirmVerificationEmail: Scalars['Boolean'];
  nonLoginResetPassword: Scalars['Boolean'];
  nonLoginSendVerificationEmail: Scalars['String'];
  resetPassword: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateArtist: IArtist;
  updateBoard: IBoards;
  updateComment: IComments;
  updateMember: Scalars['Boolean'];
  updateUser: IUser;
  uploadFile: Scalars['String'];
  uploadFiles: Array<Scalars['String']>;
};


export type IMutationArtistLikeToggleArgs = {
  artistId: Scalars['String'];
  status: Scalars['Boolean'];
};


export type IMutationConfirmVerificationEmailArgs = {
  authNumber: Scalars['String'];
};


export type IMutationCreateArtistArgs = {
  createArtistInput: ICreateArtistInput;
};


export type IMutationCreateBoardsArgs = {
  createBoardInput?: InputMaybe<ICreateBoardInput>;
};


export type IMutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateMemberArgs = {
  artistId: Scalars['String'];
  createMemberInput: ICreateMemberInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteArtistLikeArgs = {
  artistId: Scalars['String'];
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteMemberArgs = {
  memberId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationNonLoginConfirmVerificationEmailArgs = {
  authNumber: Scalars['String'];
  email: Scalars['String'];
};


export type IMutationNonLoginResetPasswordArgs = {
  email: Scalars['String'];
  updatePasswordInput: IUpdatePasswordInput;
};


export type IMutationNonLoginSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type IMutationResetPasswordArgs = {
  updatePasswordInput: IUpdatePasswordInput;
};


export type IMutationUpdateArtistArgs = {
  updateArtistInput: IUpdateArtistInput;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
};


export type IMutationUpdateMemberArgs = {
  memberId: Scalars['String'];
  updateMemberInput: IUpdateMemberInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type IMutationUploadFilesArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  districtList: Array<IDistrict>;
  fetchArtist: IArtist;
  fetchArtistCount: Scalars['Int'];
  fetchArtistWithoutAuth: IArtist;
  fetchBoard: IBoards;
  fetchBoardsBySearch: Array<IBoards>;
  fetchByComment: IComments;
  fetchCategories: Array<ICategory>;
  fetchCity: IFetchDistricts;
  fetchCitys: Array<ICity>;
  fetchComments: Array<IComments>;
  fetchMapBoards: Array<IBoards>;
  fetchMembers: Array<IMember>;
  fetchRecentBoards: Array<IBoards>;
  fetchUser: IUser;
};


export type IQueryFetchArtistCountArgs = {
  artistId: Scalars['String'];
};


export type IQueryFetchArtistWithoutAuthArgs = {
  artistId: Scalars['String'];
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsBySearchArgs = {
  categoryId?: InputMaybe<Array<Scalars['String']>>;
  districtId?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchByCommentArgs = {
  commentId: Scalars['String'];
};


export type IQueryFetchCityArgs = {
  name: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchMapBoardsArgs = {
  distance: Scalars['Float'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};


export type IQueryFetchMembersArgs = {
  artistId: Scalars['String'];
};


export type IQueryFetchRecentBoardsArgs = {
  artistId: Scalars['String'];
};

export type IUpdateArtistInput = {
  active_name?: InputMaybe<Scalars['String']>;
  artistImageURL?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  promotion_url?: InputMaybe<Scalars['String']>;
};

export type IUpdateBoardInput = {
  boardAddressInput?: InputMaybe<IBoardAddressInput>;
  boardImageURL?: InputMaybe<Array<Scalars['String']>>;
  categoryId?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['DateTime']>;
  start_time?: InputMaybe<Scalars['DateTime']>;
};

export type IUpdateMemberInput = {
  memberImageURL?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type IUpdatePasswordInput = {
  password: Scalars['String'];
};

export type IUpdateUserInput = {
  nickname: Scalars['String'];
  userImageURL: Scalars['String'];
};

export type IUser = {
  __typename?: 'User';
  authorities: IUserAuthority;
  email: Scalars['String'];
  id: Scalars['String'];
  liked_artist: Array<ILikeArtist>;
  nickname: Scalars['String'];
  userImageURL: Scalars['String'];
  wrong_pass: Scalars['Int'];
};

export type IUserAuthority = {
  __typename?: 'UserAuthority';
  artist: IArtist;
  artistId: Scalars['String'];
  authority: Scalars['String'];
  id: Scalars['String'];
  userId: Scalars['String'];
};
