var socket = io.connect('http://localhost:3005',{'forcellew': true});

socket.on('messages',function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = `<div>
                    <strong>${data.autor}<strong>;
                    <em>${data.texto}</em>
                </div>`;

                document.getElementById('messages'),innerHTML = html;
}