declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListInterfaceInfoVO = {
    code?: number;
    data?: InterfaceInfoVO[];
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo = {
    code?: number;
    data?: PageInterfaceInfo;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserInterfaceInfo = {
    code?: number;
    data?: PageUserInterfaceInfo;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInterfaceInfo = {
    code?: number;
    data?: UserInterfaceInfo;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceInfo = {
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    url?: string;
  };

  type InterfaceInfoInvokeRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    requestParams?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type InterfaceInfoUpdateRequest = {
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    url?: string;
  };

  type InterfaceInfoVO = {
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type listInterfaceInfoByPageUsingGETParams = {
    current?: number;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    pageSize?: number;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserInterfaceInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserInterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    secretKey?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    createTime?: string;
    id?: number;
    interfaceInfoId?: number;
    isDelete?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserInterfaceInfoAddRequest = {
    interfaceInfoId?: number;
    leftNum?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserInterfaceInfoQueryRequest = {
    current?: number;
    id?: number;
    interfaceInfoId?: number;
    leftNum?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserInterfaceInfoUpdateRequest = {
    id?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
