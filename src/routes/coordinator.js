export const goToLoginPage = (navigate) => {
    navigate("/");
};

export const goToSignupPage = (navigate) => {
    navigate("/signup");
};
  
export const goToHomePage = (navigate) => {
    navigate("/home");
};
 
export const goToCommentPage = (navigate, postId) => {
    navigate(`/comments/${postId}`)
}
