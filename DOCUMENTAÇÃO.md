#1 - Fazer o build das imagens Docker
docker build -f ./apps/admin-api/Dockerfile -t afonsoburginski/taxi-admin-api .
docker build -f ./apps/admin-panel/Dockerfile -t afonsoburginski/taxi-admin-panel .
docker build -f ./apps/driver-api/Dockerfile -t afonsoburginski/taxi-driver-api .
docker build -f ./apps/rider-api/Dockerfile -t afonsoburginski/taxi-rider-api .
docker build -f ./apps/payment-gateways/Dockerfile -t payment-gateways .

#2 Fazer pull das imagens para o Docker Hub
docker pull afonsoburginski/taxi-rider-api
docker pull afonsoburginski/taxi-driver-api
docker pull afonsoburginski/taxi-admin-panel
docker pull afonsoburginski/taxi-admin-api
docker pull redis
docker pull mysql:8.0.22
docker pull ridyio/delivery-gateway-box

#3 Deploy das imagens criadas
docker-compose up -d

#4 Reiniciar containers do Docker
docker compose down
docker compose up -d


#senha root e ssh
ssh root@217.196.60.178
Link@2020xac5dab2

#hostname
srv554125.hstgr.cloud

#API Google Maps:
AIzaSyCMj7bCiqbmdPX3yWMMpz3YZfTuPbH7oi4
a64593a4-1fcb-4fd4-b6b7-f0880f250309

#API Twilio: 
LUU8496CLPNDMCEYMNR8QF61d613110e7f0c4b725e83e08b2107cfd1

#Script keytool:
keytool -genkey -v -keystore keystore.jks -alias easyrider -keyalg RSA -keysize 2048 -validity 10000
keytool -genkey -v -keystore keystore.jks -alias easydriver -keyalg RSA -keysize 2048 -validity 10000



ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDgR37s3sYmxJ3FNHvmIeLD7IL0cwJ4TCIDqbleHiXonQ8UN5fZuBRCShyd6H3i5wBap4xyTgGer9++ta3wlwtP3cXgC/WBJv7CMBkmJIUkh/wib+Z2cW+AB50Lfw45GjkA3PMKDamK+UkTCsvWLqwFPZ/J3Hx+Ox+cbiR/CI6VCx4c2zFA1oAlry0FyOLRl3cPYQ+MYxxKqrJLKeBi2tTj2F8eP0TJeuENiZzuTWkfUoCqq5pmHGzmzYd4oIDXZiMfB8lyEByoR3AVQISIu7IfGJHdtQHkFUA8Skq2raR0H2/oVhCXI4p5yGt56p643CNVgN/fJg2OgFkdrSv/zbHt+9p4/Wnv9WxAqhI3DAMlJbKVgu4CMZDEtkoIbQhl8CwKeVGwltE9pwOuX89spWUw/kDa9uAyiFrKsdOkul02xPLBlSbu0E44bpom8BjP36JWJD4hJLgqvXivZsgMSQDQOezCtVx7/AmUqtEslRlfr5bn8MuRDMoKpVgtodphQM+8SFt9hP81Nk4UyziMzaZ37MfdnCQU32IGu1Hso2gXFfj1kn8v8T+Obt8RRmjjdE4Z3YsntjctqNub2Vi+2AnMN6SUjhHobPSTVp9QkhJCYamsGEscw/54qPpRXDGqCI0McNptIJ308dGK3K6dbAMfevqpeTEuY8MWjtN8cv9+1Q== afonsoburginski@gmail.com


root
|-- apps
|   |-- admin-api
|   |   |-- Dockerfile
|   |-- admin-gql-gen
|   |   |-- gt.ts
|   |   |-- Project.json
|   |-- admin-panel
|   |   |-- Dockerfile
|   |-- driver-api
|   |   |-- Dockerfile
|   |-- rider-api
|   |   |-- Dockerfile
|   |-- payment-gateways
|   |   |-- Dockerfile
|-- libs
|   |-- database
|   |-- flutter_common
|   |-- generic_map
|-- nginx
|   |-- default.conf
|-- decorate-angular.cli.js
|-- docker-compose-flutter.yaml
|-- documentation.html
|-- jest.preset.js
|-- nx.json
|-- package-lock.json
|-- package.json
|-- tsconfig.base.json

