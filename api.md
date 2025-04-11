# Pets

Types:

- <code><a href="./src/resources/pets.ts">Pet</a></code>
- <code><a href="./src/resources/pets.ts">PetFindByStatusResponse</a></code>
- <code><a href="./src/resources/pets.ts">PetFindByTagsResponse</a></code>
- <code><a href="./src/resources/pets.ts">PetUploadResponse</a></code>

Methods:

- <code title="post /pet">client.pets.<a href="./src/resources/pets.ts">create</a>({ ...params }) -> Pet</code>
- <code title="get /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">retrieve</a>(petID) -> Pet</code>
- <code title="put /pet">client.pets.<a href="./src/resources/pets.ts">update</a>({ ...params }) -> Pet</code>
- <code title="delete /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">delete</a>(petID) -> void</code>
- <code title="get /pet/findByStatus">client.pets.<a href="./src/resources/pets.ts">findByStatus</a>({ ...params }) -> PetFindByStatusResponse</code>
- <code title="get /pet/findByTags">client.pets.<a href="./src/resources/pets.ts">findByTags</a>({ ...params }) -> PetFindByTagsResponse</code>
- <code title="post /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">updateWithForm</a>(petID, { ...params }) -> Pet</code>
- <code title="post /pet/{petId}/uploadImage">client.pets.<a href="./src/resources/pets.ts">upload</a>(petID, { ...params }) -> PetUploadResponse</code>

# Stores

Types:

- <code><a href="./src/resources/stores/stores.ts">StoreListInventoryResponse</a></code>

Methods:

- <code title="get /store/inventory">client.stores.<a href="./src/resources/stores/stores.ts">listInventory</a>() -> StoreListInventoryResponse</code>

## Order

Types:

- <code><a href="./src/resources/stores/order.ts">Order</a></code>

Methods:

- <code title="post /store/order">client.stores.order.<a href="./src/resources/stores/order.ts">create</a>({ ...params }) -> Order</code>
- <code title="get /store/order/{orderId}">client.stores.order.<a href="./src/resources/stores/order.ts">retrieve</a>(orderID) -> Order</code>
- <code title="delete /store/order/{orderId}">client.stores.order.<a href="./src/resources/stores/order.ts">delete</a>(orderID) -> void</code>

# User

Types:

- <code><a href="./src/resources/user.ts">User</a></code>
- <code><a href="./src/resources/user.ts">UserLoginResponse</a></code>

Methods:

- <code title="post /user">client.user.<a href="./src/resources/user.ts">create</a>({ ...params }) -> User</code>
- <code title="get /user/{username}">client.user.<a href="./src/resources/user.ts">retrieve</a>(username) -> User</code>
- <code title="put /user/{username}">client.user.<a href="./src/resources/user.ts">update</a>(pathUsername, { ...params }) -> void</code>
- <code title="delete /user/{username}">client.user.<a href="./src/resources/user.ts">delete</a>(username) -> void</code>
- <code title="post /user/createWithList">client.user.<a href="./src/resources/user.ts">createWithList</a>([ ...body ]) -> User</code>
- <code title="get /user/login">client.user.<a href="./src/resources/user.ts">login</a>({ ...params }) -> string</code>
- <code title="get /user/logout">client.user.<a href="./src/resources/user.ts">logout</a>() -> void</code>
