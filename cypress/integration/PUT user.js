describe("POST call", () => {
  let token =
    "44656c4fb83ebdac04cfdc8e5e97cb69b567347dbc40c982a1c350dee2efa0ec";

  it.only("Post user", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: {
        name: "CY_Test",
        email: "cypress_test125@com",
        gender: "male",
        status: "active",
      },
    })
      .then((res) => {
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        expect(res.body.meta).to.be.null;
        expect(res.body.data).has.property("name", "CY_Test");
        expect(res.body.data).has.property("email", "cypress_test125@com");
        expect(res.body.data).has.property("gender", "male");
        expect(res.body.data).has.property("status", "active");
      })
      .then((res) => {
        const userId = res.body.data.id;
        cy.log("User id is: " + userId);

        cy.request({
          method: "PUT",
          url: "https://gorest.co.in/public/v1/users/" + userId,
          headers: {
            Authorization: "Bearer " + token,
          },
          body: {
            name: "CY_Test_Updated",
            email: "cypress_test_updated125@com",
          },
        }).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body.data).has.property("id", userId);
          expect(res.body.data).has.property("name", "CY_Test_Updated");
          expect(res.body.data).has.property(
            "email",
            "cypress_test_updated125@com"
          );
        });
      });
  });
});
