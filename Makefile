# ===== RUN =====
.PHONY: dev-up
dev-up:
	docker compose -f docker-compose.yml up -d --build dev-frontend

.PHONY: dev-stop
dev-stop:
	docker compose -f docker-compose.yml stop dev-frontend

.PHONY: down
down:
	docker compose down -v
