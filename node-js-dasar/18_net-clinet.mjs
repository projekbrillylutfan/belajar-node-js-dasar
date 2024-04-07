import net from "net";

const connection = net.createConnection({ port: 3000, host: "localhost" });

setInterval(() => {
  connection.write("ayam\r\n");
}, 2000);

connection.addListener("data", (data) => {
  console.log(`menerima data dari server : ${data.toString()}`);
});
