import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('127.0.0.1', 2000))
server.listen(25)
print('WORK')
client_socket, adress = server.accept()
data = client_socket.recv(1024).decode('utf-8')
content = 'Good'.encode('utf-8')
client_socket.send(content)
print('Shutdown')