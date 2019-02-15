export default async function loadData() {
  const data = await Promise.all([
    fetch("/data2.csv", {
      credentials: "same-origin",
    }).then(r => r.text()),
    fetch("/data_zokusei.csv", {
      credentials: "same-origin",
    }).then(r => r.text()),
  ]);

  const csv = data[0]
    .split("\n")
    .map(d => d.split(",").map(dd => dd.trim()))
    .filter(d => d.length > 0);

  const datazokusei = data[1].split("\n");

  return {
    data: csv.map<Data>((d, i) => ({
      id: i.toString(),
      image: `images/${datazokusei.indexOf(d[1])}.svg`,
      personalimage: `images/${datazokusei.indexOf(d[1])}.png`,
      zokusei_key: `data${datazokusei.indexOf(d[1])}`,
      regionName: d[0],
      zokusei_jp: d[1],
      groupName: d[2],
      title: d[3],
      name: d[4],
      postcode: d[6],
      address: d[7],
      lat: parseFloat(d[8]),
      lon: parseFloat(d[9]),
      company: d[5],
    })),
    datazokusei,
  };
}
