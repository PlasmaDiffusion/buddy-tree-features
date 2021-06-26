import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

//Api mocks
import { rest } from "msw";
import { setupServer } from "msw/node";


//Mock request for testing featureList.test.tsx
const server = setupServer(
  rest.get("/getFeatures", (req, res, ctx) => {
    return res(
      ctx.json(
        {
          features:[
          {
          id: 0,
          description: "Some feature",
          votes: 0,
          userVoted: false,
          },
      
          { id: 1,
            description: "Some other feature",
            votes: 1,
            userVoted: true,
            }
          ]
        }
      )
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

