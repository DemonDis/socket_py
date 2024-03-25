import socket

HOST = "127.0.0.1"  # Standard loopback interface address (localhost)
PORT = 3031 # Port to listen on (non-privileged ports are > 1023)

def start_server():
    # Создаем сокет
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((HOST, PORT))

    # Слушаем входящие соединения
    server.listen(1)
    print("Сервер запущен и ожидает подключений...")

    # Принимаем входящее соединение
    client_socket, client_address = server.accept()
    print(f"Подключение установлено с {client_address}")
    
    # Получаем данные от клиента, по 1024 байт
    data = client_socket.recv(1024).decode('utf-8')
    print(f"Получены данные: {data}")
    HDRS = 'HTTP/1.1 200 OK\r\nContent-Type text/html; charset=utf-8\r\n\r\n'

    content = 'Good'.encode('utf-8')

    client_socket.send(HDRS.encode('utf-8') + content)
    print('Shutdown')