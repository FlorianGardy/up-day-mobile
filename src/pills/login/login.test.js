import { UPDATE_USER, updateUser } from "./login.actions";
import login from "./login.reducer";

describe("# Login", () => {
  describe("## action", () => {
    it("should create an action to update username", () => {
      const uuid = "aaaa-1111-aaaa";
      const name = "Chuck Norris";
      const email = "bestman@gmail.com";
      const token = "myToken";
      const expectedAction = {
        type: UPDATE_USER,
        payload: { uuid, name, email, token }
      };
      expect(updateUser(uuid, name, email, token)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return inital state", () => {
      expect(login({ user: "" }, {})).toEqual({ user: "" });
    });

    it("should handle UPDATE_USERNAME", () => {
      const uuid = "aaaa-1111-aaaa";
      const name = "Chuck Norris";
      const email = "bestman@gmail.com";
      const token = "myToken";
      expect(
        login(
          {
            uuid: "",
            name: "",
            email: "",
            token: ""
          },
          { type: UPDATE_USER, payload: { uuid, name, email, token } }
        )
      ).toEqual({
        uuid: "aaaa-1111-aaaa",
        name: "Chuck Norris",
        email: "bestman@gmail.com",
        token: "myToken"
      });
    });
  });
});
