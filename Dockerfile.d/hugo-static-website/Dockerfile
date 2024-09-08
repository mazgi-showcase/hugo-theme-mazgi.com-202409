FROM ghcr.io/mazgi/hugo-static-website AS content-builder
LABEL org.opencontainers.image.source="https://github.com/mazgi/mazgi.com/blob/main/Dockerfile.d/hugo-static-website/Dockerfile"

ARG DEBIAN_FRONTEND=noninteractive
ARG GID=0
ARG UID=0
ARG HEALTHCHECK_URL="http://127.0.0.1:${HUGO_SERVER_PORT}/"
ENV HEALTHCHECK_URL=${HEALTHCHECK_URL}
CMD ["sleep", "infinity"]
COPY rootfs/usr/local /usr/local
HEALTHCHECK --interval=2s --timeout=1s --start-period=4s --retries=2\
 CMD curl --fail --output /dev/null --silent ${HEALTHCHECK_URL}

RUN : Create a development user with the same UID: ${UID} and GID: ${GID} as you\
  && useradd --comment '' --create-home --gid users --uid ${UID} developer\
  && groupadd --gid ${GID} developer || true\
  && usermod --append --groups ${GID} developer || true\
  && echo '%users ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/grant-all-without-password-to-users\
  && echo '%developer ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/grant-all-without-password-to-developer
