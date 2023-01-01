import { TOKEN, DATABASE_ID_2 } from "../../config/index";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }

  try {
    const { name, email, msg } = JSON.parse(req.body);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Notion-Version": "2022-02-22",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        parent: {
          type: "database_id",
          database_id: DATABASE_ID_2,
        },
        properties: {
          name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          email: {
            email: email,
          },
          msg: {
            rich_text: [
              {
                text: {
                  content: msg,
                },
              },
            ],
          },
        },
      }),
    };
    await fetch("https://api.notion.com/v1/pages", options);
    res.status(201).json({ msg: "Success" });
  } catch (err) {
    res.status(500).json({ msg: "There was an error" });
  }
}
