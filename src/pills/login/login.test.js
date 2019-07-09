import { UPDATE_USER, updateUser } from "./login.actions";
import login from "./login.reducer";

describe("# Login", () => {
  describe("## action", () => {
    it("should create an action to update username", () => {
      const user = "Check Norris";
      const expectedAction = {
        type: UPDATE_USER,
        user
      };
      expect(updateUser(user)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return inital state", () => {
      expect(login({ user: "" }, {})).toEqual({ user: "" });
    });

    it("should handle UPDATE_USERNAME", () => {
      const user = "Chuck Norris";
      expect(login({ user: "" }, { type: UPDATE_USER, user })).toEqual({
        user: "Chuck Norris"
      });
    });
  });
});
