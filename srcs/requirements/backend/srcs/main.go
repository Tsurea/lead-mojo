package main

import (
	"log"
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Hello\n")
}

func main() {
	router := http.NewServeMux()

	router.HandleFunc("/hello", hello);

	api := http.NewServeMux()
	api.Handle("/api/v1/", http.StripPrefix("/api/v1/", router))

	server := http.Server{
		Addr: ":5000",
		Handler: router,
	}

	log.Println("Server listening on port 5000...");
	server.ListenAndServe();
}
