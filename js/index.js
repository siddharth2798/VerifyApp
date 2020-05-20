hash = "";

function clearChain() {
  window.localStorage.clear();
}

function upload() {
  let storage = window.localStorage;

  const reader = new FileReader();

  reader.onloadend = function () {
    const ipfs = window.IpfsApi("localhost", 5001); // Connect to IPFS
    const buf = buffer.Buffer(reader.result); // Convert data into buffer
    ipfs.files.add(buf, (err, result) => {
      // Upload buffer to IPFS
      if (err) {
        console.error(err);
        return;
      }

      hash = result[0].hash;
      let url = "Calculated IPFS Hash: " + result[0].hash;
      document.getElementById("url").innerHTML = url;
    });
  };
  const photo = document.getElementById("photo");
  reader.readAsArrayBuffer(photo.files[0]); //Read Provided File
}

function submit() {
  var caseNo = document.getElementById("caseno").value;

  var ipfshash = hash;

  let elixir = new Blockchain();
  elixir.addBlock(hash, caseNo);

  console.log(JSON.stringify(elixir, null, 4));
  window.localStorage.setItem("chain", JSON.stringify(elixir, null, 4));
}

