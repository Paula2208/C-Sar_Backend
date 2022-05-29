# C-Sar
Backend del Proyecto web para codificar o decodificar textos usando cifrado césar.


## Endpoints

### URL
-> Using Heroku
-> Puerto por defecto: 2002

https://tranquil-fortress-58689.herokuapp.com/


#### Body Ejemplo
{
    "text" : "Hola Mundo",
    "base" : 3
}

#### Decrypt response
{
    "decrypt": "krñd oxpgr"
}

#### Encrypt response
{
    "encrypt": "hola mundo"
}

##### POST /decrypt/esp
Desencriptar textos en español.

##### POST /decrypt/eng
Desencriptar textos en inglés.

##### POST /encrypt/esp
Encriptar textos en español.

##### POST /encrypt/eng
Encriptar textos en inglés.

#### Status
**Success** : 200
**Failed** : 400

## Restricciones

1. No acepta signos de puntiación, solo espacios y letras.
2. Está en dos idiomas: Inglés y español.
3. No acepta vocales con tildes.
4. Los procesos en español aceptan la ñ.