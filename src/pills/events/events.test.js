import {
  REFRESH_HISTORY,
  refreshHistory,
  UPDATE_SELECTED_DATE,
  updateSelectedDate
} from "./history.action";
import history from "./history.reducer";
import { getSelectedHistoryDate, getHistoryList } from "./history.selector";

describe("# history", () => {
  describe("## actions", () => {
    it("should create an action to refresh history", () => {
      const history = [
        {
          id: 1,
          date: "2019-07-01T13:42:13.063Z",
          type: "Normale",
          nature: "Miction",
          volume: "+ +",
          context: ["Fuite", "Difficulté"],
          comment: "",
          userId: 1,
          createdAt: "2019-07-01T13:42:22.928Z",
          updatedAt: "2019-07-01T13:42:22.928Z",
          userUuid: null
        }
      ];
      const expectedAction = {
        type: REFRESH_HISTORY,
        history
      };
      expect(refreshHistory(history)).toEqual(expectedAction);
    });
    it("should create an action to update selected date", () => {
      const date = "2019-07-01T13:42:22.928Z";
      const expectedAction = {
        type: UPDATE_SELECTED_DATE,
        date
      };
      expect(updateSelectedDate(date)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return the initial state", () => {
      expect(
        history(
          {
            history: [],
            selectedHistoryDate: "2019-07-01T13:42:22.928Z"
          },
          {}
        )
      ).toEqual({
        history: [],
        selectedHistoryDate: "2019-07-01T13:42:22.928Z"
      });
    });

    it("should handle REFRESH_HISTORY", () => {
      expect(
        history(
          { history: [] },
          {
            type: REFRESH_HISTORY,
            history: [
              {
                id: 1,
                date: "2019-07-01T13:42:13.063Z",
                type: "Normale",
                nature: "Miction",
                volume: "+ +",
                context: ["Fuite", "Difficulté"],
                comment: "",
                userId: 1,
                createdAt: "2019-07-01T13:42:22.928Z",
                updatedAt: "2019-07-01T13:42:22.928Z",
                userUuid: null
              }
            ]
          }
        )
      ).toEqual({
        history: [
          {
            id: 1,
            date: "2019-07-01T13:42:13.063Z",
            type: "Normale",
            nature: "Miction",
            volume: "+ +",
            context: ["Fuite", "Difficulté"],
            comment: "",
            userId: 1,
            createdAt: "2019-07-01T13:42:22.928Z",
            updatedAt: "2019-07-01T13:42:22.928Z",
            userUuid: null
          }
        ]
      });

      expect(
        history(
          {
            history: []
          },
          {
            type: REFRESH_HISTORY,
            history: [
              {
                id: 1,
                date: "2019-07-01T13:42:13.063Z",
                type: "Normale",
                nature: "Miction",
                volume: "+ +",
                context: ["Fuite", "Difficulté"],
                comment: "",
                userId: 1,
                createdAt: "2019-07-01T13:42:22.928Z",
                updatedAt: "2019-07-01T13:42:22.928Z",
                userUuid: null
              }
            ]
          }
        )
      ).toEqual({
        history: [
          {
            id: 1,
            date: "2019-07-01T13:42:13.063Z",
            type: "Normale",
            nature: "Miction",
            volume: "+ +",
            context: ["Fuite", "Difficulté"],
            comment: "",
            userId: 1,
            createdAt: "2019-07-01T13:42:22.928Z",
            updatedAt: "2019-07-01T13:42:22.928Z",
            userUuid: null
          }
        ]
      });
    });

    it("should handle UPDATE_SELECTED_DATE", () => {
      expect(
        history(
          { history: [], selectedHistoryDate: new Date() },
          {
            type: UPDATE_SELECTED_DATE,
            date: "2019-07-01T13:42:22.928Z"
          }
        )
      ).toEqual({
        history: [],
        selectedHistoryDate: "2019-07-01T13:42:22.928Z"
      });
    });
  });

  describe("## selectors", () => {
    it("should return [] for history", () => {
      const store = {
        HistoryReducer: {
          history: [],
          selectedHistoryDate: "2019-07-01T13:42:22.928Z"
        }
      };
      expect(getHistoryList(store)).toEqual([]);
    });

    it("should return the date for selectHistoryDate", () => {
      const store = {
        HistoryReducer: {
          history: [],
          selectedHistoryDate: "2019-07-01T13:42:22.928Z"
        }
      };
      expect(getSelectedHistoryDate(store)).toEqual("2019-07-01T13:42:22.928Z");
    });
  });
});
