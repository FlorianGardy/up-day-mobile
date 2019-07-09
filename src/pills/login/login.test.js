import { UPDATE_USER, updateUser } from "./login.actions";
import login from "./login.reducer";
import { getUuid, getName, getEmail, getToken } from "./login.selectors";

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

  describe("## selector", () => {
    describe("Should return 1111-aaaaa-1111 as uuid", () => {
      const store = { LoginReducer: { uuid: "1111-aaaaa-1111" } };
      expect(getUuid(store)).toEqual("1111-aaaaa-1111");
    });
    describe("Should return Chuck Norris as name", () => {
      const store = { LoginReducer: { name: "Chuck Norris" } };
      expect(getName(store)).toEqual("Chuck Norris");
    });
    describe("Should return 00tfhz555z00z198zdiznd as token", () => {
      const store = { LoginReducer: { token: "00tfhz555z00z198zdiznd" } };
      expect(getToken(store)).toEqual("00tfhz555z00z198zdiznd");
    });
    describe("Should return god@gmail.com as email", () => {
      const store = { LoginReducer: { email: "god@gmail.com" } };
      expect(getEmail(store)).toEqual("god@gmail.com");
    });
  });
});
